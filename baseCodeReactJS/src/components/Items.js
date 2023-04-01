import React, { useEffect, useState } from "react";
import { UseItem } from "../hooks"
export default function Items() {
   
    const {
        items,
        handleGetItem
      
    } = UseItem();

    useEffect(() => {
        handleGetItem()
    }, []);
   
    const [id, setId] = useState('')
    const [name, setName] = useState('')
  
    
    return (
        
        <div>
          
           <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Hanh dong</th>
                </tr>
                </thead>
                
                <tbody>
                {
                        items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                  
                                </tr>
                            )
                        })
                        
                    }
                      
                </tbody>
                
           </table>
          <div>
 
          </div>
        </div>
    )
}

