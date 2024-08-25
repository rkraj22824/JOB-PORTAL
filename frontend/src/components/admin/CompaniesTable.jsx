import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'
import { useNavigate } from 'react-router-dom';




const filterCompany = []
const CompaniesTable = () => {


    const navigate = useNavigate();



  return (
    <div>
    <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                filterCompany?.map((company) => (
                    <tr>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src={company.logo}/>
                            </Avatar>
                        </TableCell>
                        <TableCell>{company.name}</TableCell>
                        <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                        <TableCell className="text-right cursor-pointer">
                            <Popover>
                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                <PopoverContent className="w-32">
                                    <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                        <Edit2 className='w-4' />
                                        <span>Edit</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </tr>

                ))
            }
        </TableBody>
    </Table>
</div>
      
  )
}

export default CompaniesTable
