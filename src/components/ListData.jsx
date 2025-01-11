const ListData = ({ listData, setListData, setIsEdit, setIdEdit, idEdit }) => {
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            if (id == idEdit) {
                setIdEdit(null);
                setIsEdit(false);
            } else if (id < idEdit) {
                setIdEdit((prev) => prev - 1);
            }
            const newArr = [...listData];

            newArr.splice(id, 1);
            setListData(newArr);
        }
    };
    const handleModify = (id) => {
        setIsEdit(true);
        setIdEdit(id);
    };
    return (
        <div className="table-data">
            <table>
                <thead>
                    <tr>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Capital City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.length > 0 ? listData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.capital}</td>
                            <td className="action">
                                <a href="#!" onClick={() => handleModify(index)}>
                                    Modify
                                </a>{" "}
                                |{" "}
                                <a href="#!" onClick={() => handleDelete(index)}>
                                    Delete
                                </a>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="4">No data yet</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;
