import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { useEffect, useState } from "react";

const Tablee = () => {
  const [listCustomer, setListCustomer] = useState()

  const fetchCustomer = async () => {
    const response = await axiosInstance.get('api/v1/customers')

    setListCustomer(response.data)
  }

  useEffect(() => {
    fetchCustomer()
  }, [])


  return (
    <Table>
      <TableHeader>
        <TableColumn>Kode Pelanggan</TableColumn>
        <TableColumn>Nama Pelanggan</TableColumn>
        <TableColumn>Tabel Transaksi</TableColumn>
      </TableHeader>
      <TableBody>
        {listCustomer.map((item) => {
          return <TableCell>{item.name}</TableCell>
        })}
        <TableRow>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Tablee;