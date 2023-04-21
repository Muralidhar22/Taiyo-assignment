const CreateContact = () => {
    return(
        <div className="flex flex-col gap-10 items-center h-min-100 justify-center">
            <h1>Create Contact</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname"/>  
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname"/>  
                </div>
                <div className="flex gap-2 items-center">
                    <div>Status</div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <input type="radio" id="active"/> 
                            <label htmlFor="active">Active</label>
                        </div>
                        <div>
                            <input type="radio" id="inactive"/> 
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                </div>
                <button>Save Contact</button>
            </form>
        </div>
    )
}

export default CreateContact;