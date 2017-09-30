import React, {Component} from 'react';
import './calculator.css';


class Calculator extends Component{
    constructor(props){
        super(props)

        this.state={
            angka1: '',
            angka2: '',
            hasil : '',
        }   
    }

    penjumlahan = () =>{
        const add = parseInt(this.state.angka1, 10)+ parseInt(this.state.angka2, 10)
        this.setState({ hasil: add })
        console.log(add)
    }   
    
    pengurangan = () =>{
        const subtract = parseInt(this.state.angka1, 10) - parseInt(this.state.angka2, 10)
        this.setState({ hasil: subtract})
        console.log(subtract)
    }

    perkalian = () =>{
        const multiply = parseInt(this.state.angka1, 10) * parseInt(this.state.angka2, 10)
        this.setState({ hasil: multiply})

    }

    pembagian = () =>{
        const devide = parseInt(this.state.angka1, 10) / parseInt(this.state.angka2, 10)
        this.setState({ hasil: devide})
    }

    render(){
        return(

            <div className="card calculator">
                <div className="card-block">
                        <h4> Simple Calculator </h4>
                        <input 
                            type="number" 
                            className="angka1" 
                            placeholder="Input angka ke 1"
                            onChange={(event)=> this.setState({ angka1: event.target.value })} />
                        <br/>
                        <input 
                            type="number" 
                            className="angka2" 
                            placeholder="Input angka ke 2" 
                            onChange={(event)=>this.setState({ angka2:event.target.value })} />
                        <br/>
                        <input type="number"  className="hasil" placeholder="Hasil" value= { this.state.hasil }/> 
                        <br/>
                        <p>Opertor Buttons</p>
                        <button  className="btn btn-primary" data-value="+" onClick={this.penjumlahan }> + </button>
                        <button  className="btn btn-primary" data-value="-" onClick={this.pengurangan} > - </button>
                        <button  className="btn btn-primary" data-value="*" onClick={this.perkalian} > * </button>
                        <button  className="btn btn-primary" data-value=":" onClick={this.pembagian} > : </button>    
                </div>
            </div>
        );
    }
}


export default Calculator;