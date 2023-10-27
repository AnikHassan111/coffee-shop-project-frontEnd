import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffeeSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const coffeeName = form.coffeeName.value
        const avaibaleQuentey = form.avaibaleQuentey.value
        const supplierName = form.supplierName.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photoUrl = form.photoUrl.value

        const addCoffeeDetails = {coffeeName,avaibaleQuentey,supplierName,taste,category,details,photoUrl}
        console.log(addCoffeeDetails);

        fetch('http://localhost:5000/addCoffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCoffeeDetails)
        })
        .then(res => res.json())
        .then(data => {

            if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Coffee Add Successfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })
    }
    return (
        <div>
            <h1 className="text-5xl text-center">Add Coffee</h1>
            <div className="bg-[#F4F3F0] p-20 flex flex-col gap-5">
                <form onSubmit={handleAddCoffeeSubmit}>
                    {/* First row */}
                    <div className="flex gap-5 ">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Avaibale Quentey</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Avaibale Quentey" name="avaibaleQuentey" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Second row */}
                    <div className="flex gap-5 ">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Supplier Name"  name="supplierName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Third row */}
                    <div className="flex gap-5 ">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Third row */}
                    <div className="">
                        <div className="form-control w-1/2 mb-8">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Photo Url" name="photoUrl" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15]" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;