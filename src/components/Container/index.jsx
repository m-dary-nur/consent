import React, { lazy, Suspense, useState, useEffect } from "react"
import { Switch, Route, withRouter } from "react-router"

const DynamicRoutes = ({ location, isReady }) => {
   return (
      <Switch location={location}>
         <Route
            exact
            path="/:segment1?/:segment2?/:segment3?"
            render={props => (isReady ? <LazyLoader key={location.pathname} {...props} /> : <Loading />)}
         />
      </Switch>
   )
}

export default withRouter(DynamicRoutes)

const LazyLoader = ({ match }) => {
   const { params } = match
   const [Page, setPage] = useState(null)

   useEffect(() => {
      switch (true) {
         case params.segment3 && true: {
            const s3 = lazy(() => import(`../../domain/${params.segment1}/${params.segment2}/${params.segment3}`))
            setPage(s3)
            break
         }
         case params.segment2 && true: {
            const s2 = lazy(() => import(`../../domain/${params.segment1}/${params.segment2}`))
            setPage(s2)
            break
         }
         case params.segment1 && true: {
            const s1 = lazy(() => import(`../../domain/${params.segment1}`))
            setPage(s1)
            break
         }
         default: {
            const s0 = lazy(() => import(`../../domain/main`))
            setPage(s0)
         }
      }
   }, [params, setPage])

   return <Suspense fallback={<Loading />}>{Page && <Page />}</Suspense>
}

const Loading = () => <div className="flex h-screen justify-center pt-20 bg text-white">loading...</div>
