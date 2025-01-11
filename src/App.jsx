import Header from "./components/Header";
import Form from "./components/Form";
import ListData from "./components/ListData";
import dataJson from "./data/data.json";
import { useState } from "react";
const App = () => {
    const [listData, setListData] = useState(dataJson);
    const [isEdit, setIsEdit] = useState(false);
    const [idEdit, setIdEdit] = useState();
    const dataProps = {
        listData,
        setListData,
        idEdit,
        setIdEdit,
        isEdit,
        setIsEdit,
    };
    return (
        <>
            <Header />
            <main>
                <div className="content">
                    <Form {...dataProps} />
                    <ListData {...dataProps} />
                </div>
            </main>
        </>
    );
};

export default App;
