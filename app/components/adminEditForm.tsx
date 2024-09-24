import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { PiSpinner } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


import axios from 'axios';



interface Props {

  id: string;
  sheetOpen: boolean;
  onChange: (value: boolean) => void;
  onSuccess: () => Promise<void>
}

const AdminEditForm: React.FC<Props> = ({  id, sheetOpen, onChange,  onSuccess }) => {

    const [editformData, setEditformData] = useState({
        "firstName":"",
        "lastName":"",
        "username":"",
        "password":"",
        "email":""
  });

  const [editFetchLoading, setEditFetchLoading] = useState(true);
  const [editEmployeeId, setEditEmployeeId] = useState("");
  const [editSuccess, setEditSuccess] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const { toast } = useToast();

  const fetchEmployeeDataByID = async (id: string) => {
    try {
      const res = await axios.get(`/api/admin/${id}`);
      if (res.status === 200) {
        setEditformData(res.data); // Assuming res.data matches the structure of editformData
      } else if (res.status === 401) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
      // Handle error state if needed
    } finally {
      setEditFetchLoading(false);
    }
  };
  const editUserData = async () => {
    toast({
      description: (
        <>
          <div className="flex items-center justify-center">
                        <PiSpinner className="h-4 w-4 mr-2 animate-spin" />
                        <p>Loading</p>
          </div>
        </>
      ),
      className:
        "top-0 right-0 bg-blue-50 text-blue-900 border-blue-900",
    });

    try {
      if(id !==""){
      const res = await axios.put(`/api/admin/${id}`, editformData);
      if (res.status === 200) {
        setEditSuccess(true);
        toast({
          description: res.data.message,
          className:
            "top-0 right-0 bg-emerald-50 text-emerald-900 border-emerald-900",
        });
        setEditEmployeeId("");
        onSuccess()
        setTimeout(() => {
          setEditSuccess(false);
        }, 3000);
      }
      }
    } catch (error: any) {
      toast({
        description: "Failed to update user data",
        className:
          "top-0 right-0 bg-red-50 text-red-900 border-red-900",
      });
    }finally{
      setEditLoading(false);
    }


  }

  useEffect(() => {
    if (id) {
      fetchEmployeeDataByID(id);
    }
  }, [id]);

  return (
    <Sheet open={sheetOpen} onOpenChange={onChange}>
      <SheetContent className='bg-inherit'>
        <SheetHeader>
          <SheetTitle>Edit Employee</SheetTitle>
          <SheetDescription>
            Edit selected employee in the system
          </SheetDescription>
        </SheetHeader>
        {editSuccess && (
          <div className="border border-emerald-100 p-2 w-full mx-auto rounded-md bg-emerald-50/50 mt-2 text-emerald-700 flex items-center gap-4 justify-center">
            <BsCheck2Circle />
            <p>Employee edited successfully</p>
          </div>
        )}
                  <form onSubmit={editUserData}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="">
                          First Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="col-span-3"
                          value={editformData.firstName}
                          onChange={(e) =>
                            setEditformData({ ...editformData, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="">
                          Last Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="col-span-3"
                          value={editformData.lastName}
                          onChange={(e) =>
                            setEditformData({ ...editformData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4 my-4">
<Label htmlFor="formula" className="">
Username
</Label>
<div className="relative col-span-3">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
       <p className="text-md font-semibold text-neutral-600">@</p>
      </div>
      <Input
        type='text'
        className="pl-8"
        placeholder="Username"
        value={editformData.username}
        onChange={(e) => setEditformData({ ...editformData, username: e.target.value })}
      />
      
    </div>
    </div>




                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit" onClick={editUserData} disabled={editLoading}>
                          {editLoading ? (
                            <div className="flex items-center justify-center">
                              <PiSpinner className="h-4 w-4 mr-2 animate-spin text-white" />
                              <p>Loading</p>
                            </div>
                          ) : (
                            <p>Save</p>
                          )}
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </form>
      </SheetContent>
    </Sheet>
  );
};

export default AdminEditForm;
