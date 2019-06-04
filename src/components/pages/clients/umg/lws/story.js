import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
      <div>
        
        <header className="section-header fixed-header">
            <h2>User Story Snippet</h2>
            <h3>Example</h3>
          </header>
          <section className="scroll">
            <table>
              <thead>
                <tr>
                  <th width="5%"><span>Number</span></th>
                  <th width="20%"><span>Name</span></th>
                  <th width="50%"><span>Description</span></th>
                  <th width="22%"><span>Type</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1175</td>
                  <td>Contributors list is not complete and has duplicate entries which cause worshub processing to fail</td>
                  <td>We need a complete contributors list to enable works and compositions to be added successfully. 
                    We need to ensure that either no duplicates exist in the list or amend works hub processing to avoid it 
                    failing on finding duplicates.</td>
                  <td>Defect - Works Hub</td>
                </tr>
                <tr>
                  <td>1174</td>
                  <td>Mio validation allows INVALID WAV files</td>
                  <td>We need to make sure that files we ingest into worksHub are valid for iTunes</td>
                  <td>Defect - Works Hub</td>
                </tr>
                <tr>
                  <td>1051</td>
                  <td>WH - Composition Language of Metadata not being default to EN</td>
                  <td>As EMI I want to capture each contributor who is involved in the creation of an asset so that I can ensure 
                    I can uniquely identify them so that any downstream processes are supported e.g. PPL Context Currently we have a solution 
                    implemented within the Commission Wizard  and Asset Upload process whereby the user selects contributors from a static drop 
                    down list. We have an issue with this solution for day 1 (11/07/12) which means that the process cannot support Commissions 
                    where contributors who do not appear on the list are involved and we have no reasonable workaround. There are outstanding 
                    stories on the backlog to both make the contributor list a dynamic feed from GR and to allow users who are not on that list, 
                    but we do not have the time to play those stories before July 11th.
                    Hence we need a stop gap solution. Proposed Solution We wish to amend the current wizard and upload processes to cease to 
                    use the drop down list and allow a free form text input. At least one contributor for a Commission must be entered. (Commission Wizard only)
                    Where a contributor is input, an additional field must be entered (to enable us to uniquely identify them). 
                    This field should be used by the User to enter one of three types of unique identifier
                    1. Social Security No. (US) or National Insurance No. (UK) or country equivalent
                    2. Date of Birth
                    3. Union Name (US only)
                    The user will also be asked to indicate what unique identifier they have used. This should be a canned list.
                    Acceptance Criteria
                    1. At least one Contributor must be input on the Commission (Commission Wizard only)
                    2. For each contributor a unique identifier must be input 
                    3. For each unique identifier added, the user must select which of the identifier types they have employed
                    4. Where the identifier is DOB, it must conform to date formatting dd/mm/yyyy
                    5. No checks (as this is an interim solution) should be applied to the other identifier types</td>
                  <td>Story - Works Hub</td>
                </tr>
                <tr>
                  <td>1046</td>
                  <td>Contributors list is not complete and has duplicate entries which cause worshub processing to fail</td>
                  <td>We need a complete contributors list to enable works and compositions to be added successfully. 
                    We need to ensure that either no duplicates exist in the list or amend works hub processing to avoid it 
                    failing on finding duplicates.</td>
                  <td>Defect - Works Hub</td>
                </tr>
                <tr>
                  <td>1174</td>
                  <td>Generate recording section for GR feed</td>
                  <td>Following fields are not being populated: * Country
                    * Parental Advisory* - Works except for *+'NotApplicable'+*
                    * Performer Contract Status - +NOT WORKING+
                    * Internal Version Title- Fixed
                    * Ingested - Fixed
                    Ingested should be an optional field
                    Country should be optional
                    Performer Contract Status should be optional - Separate defect #1061 has been raised to track this.
                    Internal Version Title should be optional. Some of these fields are also missing in Sound Recording 
                    Work which will need to be checked following a fix.
                    *Retest*.</td>
                  <td>Defect - Works Hub</td>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
    );
  }
}

export default Story;
