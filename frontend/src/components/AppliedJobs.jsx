import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJob = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? (
                            <span>You haven't applied to any job yet.</span>
                        ) : (
                            allAppliedJobs.map((appliedJob) => {
                                // Check if appliedJob and its properties are valid
                                if (!appliedJob || !appliedJob.job) {
                                    return (
                                        <TableRow key={Math.random()}>
                                            <TableCell colSpan="4">Invalid job data</TableCell>
                                        </TableRow>
                                    );
                                }

                                return (
                                    <TableRow key={appliedJob._id}>
                                        {/* <TableCell>{appliedJob.createdAt ? appliedJob.createdAt.split("T")[0] : 'N/A'}</TableCell> */}
                                        <TableCell>{appliedJob.job.title || 'No Title'}</TableCell>
                                        <TableCell>{appliedJob.job.company?.name || 'No Company'}</TableCell>
                                        <TableCell className="text-right">
                                            <Badge className={`${appliedJob.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>
                                                {appliedJob.status.toUpperCase()}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJob;
