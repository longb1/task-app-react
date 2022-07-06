import React from "react";

export default function EditForm(props) {
  

    return(
        <form>
            <input type="text" 
            alt="experience"
            name="companyName"
            placeholder="company"
            />
            <input type="text" 
            alt="experience"
            name="position"
            placeholder="position"
            />
            <textarea
            alt="experience"
            name="summary"
            placeholder="summary"
            />
            <label htmlFor="dateFrom">work from</label>
            <input type="date" 
            alt="experience"
            name="dateFrom"
            placeholder="dateFrom"
            />
            <label htmlFor="dateUntil">work until</label>
            <input type="date" 
            alt="experience"
            name="dateUntil"
            placeholder="dateUntil"
            />
            <button>add</button>
        </form>
    )
}

