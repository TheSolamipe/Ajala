import React from 'react';
import './../../../sass/main2.scss';
import CustomerItem from './CustomerReview/CustomerItem';
import CustomerData from './CustomerReview/CustomerData';


class CustomerReview extends React.Component{
  constructor(){
    super();
    this.state={
      customers: CustomerData
    }
  }

  render(){
    const customerComponent = this.state.customers.map(customer => <CustomerItem key={customer.id} customer={customer}/>)
    return(
      <div className='customerReview'>
          {customerComponent}
          <button className='btn-inline'>Show all <span>&rarr;</span></button>
      </div>
    )
  }

}
export default CustomerReview;
