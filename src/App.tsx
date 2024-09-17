import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import React, { Suspense } from "react"
import { Spinner } from "@chakra-ui/react"
import MainHeader from "./components/Home/MainHeader"

const HackthonForm = React.lazy(() => import("./components/hackthon/CreateEditHackthonForm"))
const ViewHackthon = React.lazy(() => import("./components/hackthon/ViewHackthon"))

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <MainHeader />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create-edit" element={<HackthonForm />} />
        <Route path="/view-hackthon" element={<ViewHackthon />} />
      </Routes>
    </Suspense>
  )
}

export default App