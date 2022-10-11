import { useState } from "react"
import data from "./data"
import "./Search.css"

function Search() {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredUser = data.filter((el) => {
    return (
      el.name.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
      el.name.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
      el.location.city.toLowerCase().includes(searchField.toLowerCase()) ||
      el.location.state.toLowerCase().includes(searchField.toLowerCase()) ||
      el.location.address.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <div className="general">
      <div className="heading">
        <h2>Quick Search Engine</h2>
          <span>
            <input
              type="text"
              placeholder="Search"
              required
              onChange={(e) => handleChange(e)}
            />
          </span>
      </div>
      <div>

        <div>
          <div>

            <div>
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Address</th>
                </tr>
                {filteredUser.map((el, index) =>
                  <tr key={index}>
                    <td>{el.name.firstName}</td>
                    <td>{el.name.lastName}</td>
                    <td>{el.location.city}</td>
                    <td>{el.location.state}</td>
                    <td>{el.location.address}</td>
                  </tr>
                )}
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
