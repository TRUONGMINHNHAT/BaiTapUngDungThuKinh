import React, { Component } from "react";
import dataGlasses from '../Data/dataGlasses.json'
import './BaiTapThuKinh.css'

class Baitapthukinh extends Component {

    

    state = {
        glassCurrent : {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList(){
        return dataGlasses.map((glassesItem,index) => {
            return <img onClick={() => this.changeGlasses(glassesItem)} style={{width : '120px',cursor:'pointer'}} className="m-2 p-2 border border-width-1" key={index} src={glassesItem.url}/>
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassCurrent : newGlasses
        });
    }

  render() {
    const keyframe = `@keyframes animateChangeGlasses${Date.now()} {
        from {
            width: 0;
            transform : rotate(45deg);
        }
       to{
            width: 150px;
            transform : rotate(0deg);
       }
    }`

      const styleGlasses = {
            width : '150px',
            top : '75px',
            right : '115px',
            opacity : '0.7',
            animation: `animateChangeGlasses${Date.now()} 1s` 
      }

      const infoGlasses = {
          width : '250px',
          top : '200px',
          left: '319px',
          paddingLeft: '15px',
          height : '105px',
          backgroundColor : 'rgba(255,127,0,0.5)',
          textAlign : 'center'
          

      }
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "2000px" }}
        >
            <style>
                {keyframe}
            </style>
          <h1 className="text-center text-light p-5">Glasses APP</h1>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                  <div className="position-relative">
                <img className="position-absolute" style={{width:'250px'}} src="./glassesImage/model.jpg" alt="model.jpg" />
                <img style={styleGlasses} className="position-absolute glassesStyle" src={this.state.glassCurrent.url} alt="" />
                <div style={infoGlasses} className="position-relative ">
                    <p style={{color : '#AB82FF',fontSize:'18px'}} className="font-weight-bold">{this.state.glassCurrent.name}</p>
                    <span style={{color : '#FFFFFF',fontSize : '13px',fontWeight: '400',paddingRight:'5px'}} className="font-weight-bold">{this.state.glassCurrent.desc}</span>
                </div>
            
                </div>
              </div>
              <div className="col-6">
                <img style={{width:'250px'}} src="./glassesImage/model.jpg" alt="model.jpg" />
                
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
              {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}

export default Baitapthukinh;
