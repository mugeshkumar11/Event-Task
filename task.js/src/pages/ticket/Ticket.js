import React from 'react'
import Movie from '../movie/Movie'
import './ticket.css';
const Ticket = () => {
  return (
    <div>
        <Movie/>
        <section className='ticket'>
            <section className='container'>
                <div className='title'>SCREEN</div>
                <div className='ticketflex'>
                    <div className='ticketbox1'>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                     <input type={"checkbox"}></input>
                    </div>
                    <div className='ticketbox2'>
                        <div className='ticketdata'>
                        <h3>Movie:</h3>
                        <h3>Time :</h3>
                        <h3>Price:</h3>
                        <h3>Seat :</h3>
                        <button>BOOK NOW</button>
                        </div>
                        <div className='ticketavailable'>
                            <h4><input type={"checkbox"} ></input>Available</h4>
                            <h4><input type={"checkbox"}></input>Sold</h4>
                            <h4><input type={"checkbox"}></input>Selected</h4>
                        </div>
                       
                    </div>
                       
                </div>
            </section>
        </section>
    </div>
  )
}

export default Ticket