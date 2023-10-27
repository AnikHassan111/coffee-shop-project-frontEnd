import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee_Card = ({ data,coffees,setCoffees }) => {
    let { _id, coffeeName, avaibaleQuentey, supplierName, taste, category, details, photoUrl } = data

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount >0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              let remaining = coffees.filter(cof => cof._id !== _id) 
                              setCoffees(remaining)
                        }
                          
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Movie" /></figure>
                <div className="w-full justify-between px-8 pt-5 flex">
                    <div>
                        <h2 className="card-title">{coffeeName}</h2>
                        <p>{taste}</p>
                        <p>{category}</p>
                        <p>{avaibaleQuentey}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-5">
                            <button className="py-2 px-4 bg-slate-900 text-white rounded-lg">View</button>
                            <Link to={`/updatecoffee/${_id}`} className="py-2 px-4 bg-slate-900 text-white rounded-lg">Edit</Link>
                            <button onClick={()=>handleDelete(_id)} className="py-2 px-4 bg-slate-900 text-white rounded-lg">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee_Card;