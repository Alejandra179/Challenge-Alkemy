import React from 'react'
import OperationForm from '../components/OperationForm'
import Table from '../components/Table'
import { useAuthContext } from "../context/authContext";
export default function Home() {
  const {idUser} = useAuthContext()
  
  return (
    <div>
        {/* <OperationForm/> */}
        <Table props={idUser}/>
    </div>
  )
}
