import React from "react";

export default function OperationForm() {
  return (
    <div>
      <form>
        <div className="row g-2 mb-2">
          <div className="col-4">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option selected></option>
                <option value="egress">Egress</option>
                <option value="income">Income</option>
              </select>
              <label for="floatingSelectGrid">Type of operation</label>
            </div>
          </div>
          <div className="col-8">
            <div className="form-floating">
              <input type="text" className="form-control" id="concept" />
              <label for="floatingInputGrid">Concept</label>
            </div>
          </div>
        </div>

        <div className="row g-2 mb-2">
        <div className="col-md">
            <div className="form-floating">
              <input type="date" className="form-control" id="date" />
              <label for="floatingInputGrid">Date</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input type="text" className="form-control" id="amount" />
              <label for="floatingInputGrid">Amount</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input type="text" className="form-control" id="category" />
              <label for="floatingInputGrid">Category</label>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2">
        
           <div className="btn btn-success">Save</div>
         
        </div>
        
      </form>
    </div>
  );
}
