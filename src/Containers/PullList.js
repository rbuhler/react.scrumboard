import React from 'react';

const PullList = props => {
    return (
     
        <div className="PullList">
            <ui5-list header-text="Pull Requests" separators="Pull Requests" class="full-width">
             
              { props.list.map( item=> (
                  <ui5-li icon="sap-icon://product" type="Active">{item.title}</ui5-li>
              )) }
              
            </ui5-list>
        </div>
    ) 
}

export default PullList;