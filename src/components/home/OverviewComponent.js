import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin: 10px;
width:100%;
`;
const BalanceBox=styled.div`
font-size:18px;
width:100%;
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
`;
const AddTrasaction=styled.div`
background:black;
color:white;
padding:5px 10px;
border-radius:4px;
text-align:center;
cursor:pointer;
font-weight:bold;
font-size:15px;
`;
const AddTransactionContainer=styled.div`
display:flex;
flex-direction:column;
border:1px solid #e6e8e9;
gap:10px;
width:100%;
padding:15px 20px;
margin: 20px;

& input{
    outline:none;
    padding:10px 12px;
    border-radius:4px;
    border:1px solid #e6e8e9;
}

`
const RadioBox=styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
& input{
    width:unset;
    margin:0 10px;
}
`;
const EpenseContainer=styled.div`
display:flex;
flex-direction:row;
gap:12px;
margin:20px;
`;
const ExpenseBox=styled.div`
display:flex;
flex-direction:column;
border-radius:4px;
border:1px solid #e6e8e9;
padding:15px 20px;
width:178px;
font-size:14px;
& span{
    font-weight:bold;
    font-size:20px;
    color:${(props)=>(props.isIncome?"green":"red")}
}
`;
const AddTransactionView=(props)=>{
    const [amount, setAmount]=useState();
    const [desc, setDesc]=useState();
    const [type,setType]=useState("EXPENSE");
    const addTransaction=()=>{
        props.addTransaction({amount:Number(amount),desc,type,id:Date.now(),})
        console.log()
        props.toggleAddTxn();
    }
return(
    <AddTransactionContainer>
        <input type="number" placeholder='amount'value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <input type="text" placeholder='description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <RadioBox>
<input type="radio" id='expense' name='type' value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
<label htmlFor="expense">Expense</label>
<input type="radio" id='income' name='type' value="INCOME" checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
<label htmlFor="income">Income</label>
        </RadioBox>
        <AddTrasaction onClick={addTransaction}>Add Transaction</AddTrasaction>
    </AddTransactionContainer>
)
}
function OverviewComponent(props) {
    const [isAddTxnVisible,toggleAddTxn]=useState(false);
  return (
    <Container>
        <BalanceBox>
            Balance: ${props.income-props.expense}
            <AddTrasaction onClick={()=>toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible?"cancel":"ADD"}</AddTrasaction>
        </BalanceBox>
        {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
        <EpenseContainer>
<ExpenseBox isIncome={false}>
    Expense <span>${props.expense}</span>
</ExpenseBox>
<ExpenseBox isIncome={true}>
    Income <span>${props.income}</span>
</ExpenseBox>
        </EpenseContainer>
    </Container>
  )
}

export default OverviewComponent