import React, { lazy, Suspense } from "react"
import { Switch, Route, withRouter } from "react-router"

const DynamicRoutes = ({ location, isReady }) => {
   return (
      <Switch location={location}>
         <Route
            exact
            path="/:segment1?/:segment2?/:segment3?/:segment4?/:segment5?"
            render={props => (isReady ? <LazyLoader key={location.pathname} {...props} /> : <Loading />)}
         />
      </Switch>
   )
}

export default withRouter(DynamicRoutes)

const LazyLoader = ({ match }) => {
   const { params } = match
   const [Page, setPage] = React.useState(null)

   React.useEffect(() => {
      switch (true) {
         case params.segment5 && true: {
            const s5 = lazy(() =>
               import(`../pages/${params.segment1}/${params.segment2}/${params.segment3}/${params.segment4}/${params.segment5}`)
            )
            setPage(s5)
            break
         }
         case params.segment4 && true: {
            const s4 = lazy(() => import(`../pages/${params.segment1}/${params.segment2}/${params.segment3}/${params.segment4}`))
            setPage(s4)
            break
         }
         case params.segment3 && true: {
            const s3 = lazy(() => import(`../pages/${params.segment1}/${params.segment2}/${params.segment3}`))
            setPage(s3)
            break
         }
         case params.segment2 && true: {
            const s2 = lazy(() => import(`../pages/${params.segment1}/${params.segment2}`))
            setPage(s2)
            break
         }
         default: {
            const s1 = lazy(() => import(`../pages/${params.segment1}`))
            setPage(s1)
         }
      }
   }, [params, setPage])

   return <Suspense fallback={<Loading />}>{Page && <Page />}</Suspense>
}

const Loading = () => <div className="flex justify-center mt-20">loading...</div>
