// import React, { Component } from 'react';
// import Sidebar from './Component/Sidebar';
// // import Header from './Component/Header';
// // import Footer from './Component/Footer';
// import About from './Component/About';

// import logo from './logo.svg';

// import './App.css';
// // import './../Style/Sidebar.css';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
      
   
//         <Sidebar/>
//         <About/>
//         {/* <Header/>
//         <Footer/> */}
    
//       </div>
//     );
//   }
// }

// export default App;

//------------------------------------------------

// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//       state={judul:[]};
//       componentDidMount() {
//       axios.get('http://api.alquran.cloud/juz/30').then((ambilData) => {
//             // console.log(Object.values(ambilData.data.data.surahs));
//             console.log(Object.values(ambilData.data.data.surahs)[0].name);
//             this.setState({
//               //  judul: Object.values(ambilData.data.data.surahs) //untuk coding api yang banyak all
//                judul: (Object.values(ambilData.data.data.surahs)[0].name) // untuk yang satuan
//     })
//   })
//   };

//   render() { 

//     const data = this.state.judul[0];

//     // const data = this.state.judul.map((item, index)=>{
//     //   var usr = [item.name]
//     //   return <p key={index}>{usr}</p>;

//     // })
//     return (
//     <div>
//      <h1>coba get data </h1>
//      {/* {data} */}
//      {this.state.judul}
//       </div>
//     );
//   }
// }


// export default App;


//--------------
// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends Component {
//   state={judul:[]};
//   componentDidMount(){
//     axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=juventus')
//     .then((ambilData)=>{
//       console.log(ambilData);
//       this.setState({
//         judul: ambilData.data.player,
//       })
//     }) 
//   };

//   render() {
//     const data = this.state.judul.map((item, index)=>{
//       var usrid   = [item.idPlayer]
//       var usrname = [item.strPlayer]
//       var usrdate = [item.dateBorn]
//       var usrnegara = [item.strNationality]
//       var usrposition = [item.strPosition]
//       return <tr key={index}><td>{usrid}</td><td>{usrname}</td><td>{usrdate}</td><td>{usrnegara}</td><td>{usrposition}</td></tr>;
//     })
//     return (
//       <div>
//         <center><h1> Real Madrid Player </h1></center>
//         <ol>
//           <tr className="head">
//             <td>ID Pemain</td>
//             <td>Nama Pemain</td>
//             <td>Tanggal Lahir Pemain</td>
//             <td>Asal Negara Pemain</td>
//             <td>Position Pemain</td>
//           </tr>
//         {data}
//         </ol>
//       </div>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends Component {
//   state={judul:[]};
//   componentDidMount(){
//     axios.get('http://localhost:3000/karyawan')
//     .then((ambilData)=>{
//       console.log(ambilData.data[0]);
//       this.setState({
//         judul: ambilData.data[0].kota,
//       })
//     })
//   }
//   render() {
//     const data = this.state.judul;
//     return (
//       <div>
//       <h1>karyawan</h1>
//       <p>{data}</p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state={judul:[]};
  componentDidMount(){
    var url = ('https://developers.zomato.com/api/v2.1/cities?q=jakarta')
    var config = {
      headers:{'user-key': '4ea94d5c78d7a306048f66daf88e6561' }};
    axios.get(url, config)
    .then((ambilData)=>{
      console.log(ambilData.data.location_suggestions);
      this.setState({
        judul: ambilData.data.location_suggestions
      })
    })
  }
  render() {
    const data = this.state.judul.map((item, index )=>{
      var nama = item.name
      return <p>{nama}</p>
    });

    return (
      <div>
      <h1>get data</h1>
      <p>{data}</p>
      </div>
    );
  }
}

export default App;