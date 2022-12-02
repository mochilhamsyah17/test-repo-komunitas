import { useState } from 'react'
import './Komunitas.css'
import axios from "axios";
// import imgCowok from '../../assets/AboutUsImgMale.png'

const Komunitas = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [alamat, setAlamat] = useState("");
    const [image, setImage] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleContent = (e) => {
        setContent(e.target.value);
    };
    const handleLokasi = (e) => {
        setAlamat(e.target.value);
    };
    const handleImage = (e) => {
        setImage(e.target.value);
    };

    const handleBtn = (e) => {
        e.preventDefault();
        axios.post("https://6388c9d6a4bb27a7f791bf55.mockapi.io/komunitas", {
            title: title,
            content: content,
            alamat: alamat,
            img: image,
        })
        .catch((error) => {
            console.log(error);
            alert("error");
        });
    }

    return(
        <>  
            <div className="cardKomunitas" id='cardUpload'>

                <div className="card-body d-flex flex-row">
                    <div>
                        <img src="img/AboutUsImgMale.png" id='userProfile'/>
                    </div>
                    <div className='contentUpload'>
                        <li>
                            <a href="#popup" style={{textDecoration: "none"}}>
                            <button className='formInput' href="#popup"><p>Bagikan kondisi lingkungan sekitar Anda</p></button>
                            </a>
                        </li>
                        <li>
                            <a href="#popup" style={{textDecoration: "none"}}>
                            <button className="buttonUpload d-flex flex-row">
                                <div className="iconImgUpload">
                                <iconify-icon icon="fluent:image-add-20-regular"></iconify-icon>
                                </div>
                                <div className='uploadeFotoOrVideo'>
                                    Upload foto/video
                                </div>
                            </button>
                            </a>
                        </li>
                    </div>

                </div>

            </div>

            <br/>
            
            <div className="popup" id='popup'>

                <div className="popup__content">

                <div className="cardKomunitas">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <img src="img/AboutUsImgMale.png" id='userProfile'/>
                        </div>
                        <div className='contentUpload'>
                            <li>
                                <h5 id='namaUser'>Ilhamsyah</h5>
                            </li>
                        </div>
                            <a href="#unPopup" className='unPop'style={{textDecoration: "none"}}>
                                <button className='closeTag'>x</button>
                            </a>
                        </div>
                        <input className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Judul' value={title} onChange={handleTitle}></input>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="6" placeholder='Bagikan kondisi lingkungan sekitar Anda' value={content} onChange={handleContent}></textarea>
                        <input className="form-control" id="exampleFormControlTextarea3" rows="1" placeholder='Lokasi kejadian (Kota, Provinsi)' value={alamat} onChange={handleLokasi}></input>
                                
                        <input type="file" id='file' className="d-flex flex-row" value={image} onChange={handleImage}>
                        </input>

                        <center><button className='buttonPost' type='submit' onClick={handleBtn}>Post</button></center>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Komunitas