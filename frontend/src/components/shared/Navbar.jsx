import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const user = false;
    return (
        <div >
            <div className='flex items-center justify-between mx-auto h-16 pr-40 pl-20 '>
                <div>
                    <h1 className='  text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-5'>
                    <ul className='  flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/signup"> <Button className="bg-[#5a03ef] hover:bg-[#360292]">Signup</Button> </Link>
                                <Link to="/login"> <Button className="bg-[#5a03ef] hover:bg-[#360292]">Login</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-70'>
                                    <div className='flex gap-5 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <div>
                                            <h1 className='font-medium'>Rajat MernStack</h1>
                                            <p>Lorem ipsum dolor sit amet </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col '>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link">View Profile</Button>

                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )

                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
