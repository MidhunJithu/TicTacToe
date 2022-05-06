import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import { Square } from "./square";

 export class Board extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            turn : 'X',
            winner : ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.calculateWinner =this.calculateWinner.bind(this);
        this.initplay =this.initplay.bind(this);
     }
     initplay(){
         this.setState({
            squares : Array(9).fill(null),
            turn : 'X',
            winner : ''
         });
     }
     
     calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

     handleClick(i){ 
        let square = this.state.squares.slice(); 
        if (!this.state.winner && !square[i]){
            square[i] = this.state.turn == 'X' ? 'X': 'O';
            let winner = this.calculateWinner(square);
            let turn = 'X';
            turn = this.state.turn == turn ? 'O' : 'X' ;
            this.setState({squares : square, turn : turn,winner:winner});
            return ;
        }   
        // console.log(winner)
        if (!this.state.winner)
            alert('already selected!')
        
    }
    // componentDidUpdate(){
        // console.log(this.state.turn)
    // }
    renerderSquare(i){
        return <Square value ={this.state.squares[i]} handleclick = {this.handleClick} pos={i}/>
    }

    render(){
        return(
            <div className="container-fluid">
                {this.state.winner ?
                <p>Congrats {this.state.winner}</p> :
                <p>Next is {this.state.turn} 's turn</p>
                }
                <Container>
                    <Row>
                        <Col md={{ offset: 2 }} className='p-0 mH-50'>{this.renerderSquare(0)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(1)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(2)}</Col>
                        <Col className='p-0 mH-50'></Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 2 }} className='p-0 mH-50'>{this.renerderSquare(3)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(4)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(5)}</Col>
                        <Col className='p-0 mH-50'></Col>
                    </Row>
                    <Row>
                        <Col md={{ offset: 2 }} className='p-0 mH-50'>{this.renerderSquare(6)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(7)}</Col>
                        <Col className='p-0 mH-50'>{this.renerderSquare(8)}</Col>
                        <Col className='p-0 mH-50'></Col>
                    </Row>
                </Container>
                <button className="btn btn-success mt-5" onClick={this.initplay}>Restart</button>
            </div> 
            
        );
    }
}