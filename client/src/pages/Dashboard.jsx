import SideBar from "../component/SideBar.jsx";
import TopBar from "../component/TopBar.jsx";
import * as React from "react";
import {Stack} from "@mui/material";
import {useState, useEffect} from "react";
import axios from 'axios';
import BookCard from "../component/BookCard.jsx";



const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:8000/book/books');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);
console.log(data.book)
  return (
    <>
      <TopBar />
      <Stack className="DashboardMain" flexDirection={"row"}>
        <Stack width={"15%"}>
          <SideBar />
        </Stack>
        <Stack sx={{m:4}}>
          <Stack><h1>All books</h1></Stack>
          {loading && <div>Loading</div>}
    {!loading && (
      <Stack >
        <h2>Doing stuff with data</h2>
        <Stack direction={"row"} flexWrap={"wrap"} gap={"10px"}>

        {data.book?.map((book) => (
                  <>
                    <BookCard key={book._id} book={book}/>
                  </>
                ))}
        </Stack>

      </Stack>
    )}

        </Stack>
       
      </Stack>
    </>
  );
};

export default Dashboard;