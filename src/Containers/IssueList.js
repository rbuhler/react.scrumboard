import React from 'react';

const IssueList = props =>{
    return (  

      <div className="IssueList">
          <ui5-list header-text="Git Issues" separators="Git Issues" class="full-width">
           
            { props.list.map( item=> (
                <ui5-li icon="sap-icon://product" type="Active">{item.title}</ui5-li>
            )) }
            
          </ui5-list>
      </div>
    )
}

export default IssueList;