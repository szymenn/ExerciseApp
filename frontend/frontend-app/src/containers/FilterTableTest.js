import MUIDataTable from "mui-datatables";
import React from 'react';

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'dropdown',
};

export default function Test(){
    return (
        <MUIDataTable 
        title={"Employee List"} 
        data={data} 
        columns={columns} 
        options={options} 
      />
    )
}
