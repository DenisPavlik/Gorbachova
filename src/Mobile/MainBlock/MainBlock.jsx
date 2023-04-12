import React from "react";
import style from "./MainBlock.module.css";
import iconSearch from "../../img/search 1.png";
import customers from "../../store/store";

const MainBlock = (props) => {
  return (
    <div className={style.body}>
      <h1>Hello Evano 👋🏼,</h1>
      <div className={style.body_inner}>
        <header>
          <div className={style.info}>
            <h2>All Customers</h2>
            <p>Active Members</p>
          </div>
          <div className={style.input}>
            <img src={iconSearch} alt="iconSearch" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => props.setQuery(e.target.value)}
            />
          </div>
        </header>
        <main>
          <div className={style.customers}>
            <div>
              {customers
                .filter((u) => {
                  if (props.query === "") {
                    return u;
                  } else if (u.name.includes(props.query)) {
                    return u;
                  } else if (
                    u.company.includes(
                      props.query.charAt(0).toUpperCase() + props.query.slice(1)
                    )
                  ) {
                    return u;
                  } else if (u.phone.includes(props.query)) {
                    return u;
                  } else if (u.email.includes(props.query)) {
                    return u;
                  } else if (
                    u.country.includes(
                      props.query.charAt(0).toUpperCase() + props.query.slice(1)
                    )
                  ) {
                    return u;
                  } else if (
                    u.status.includes(
                      props.query.charAt(0).toUpperCase() + props.query.slice(1)
                    )
                  ) {
                    return u;
                  } else {
                    return "";
                  }
                })
                .map((u) => {
                  return (
                    <div className={style.customer}>
                      <div className={style.customer_info}>
                        <div>Customer Name</div>
                        <div>{u.name}</div>
                      </div>
                      <div className={style.customer_info}>
                        <div>Company</div>
                        <div>{u.company}</div>
                      </div>
                      <div className={style.customer_info}>
                        <div>Phone Number</div>
                        <div>{u.phone}</div>
                      </div>
                      <div className={style.customer_info}>
                        <div>Email</div>
                        <div>{u.email}</div>
                      </div>
                      <div className={style.customer_info}>
                        <div>Country</div>
                        <div>{u.country}</div>
                      </div>
                      <div className={style.customer_info}>
                        <div>Status</div>
                        <div
                          className={`${style.customer_status} ${
                            u.status === "Active"
                              ? style.active
                              : style.inactive
                          }`}
                        >
                          {u.status}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </main>
        <footer>
          <p>Showing data 1 to 8 of 256K entries</p>
          <div className={style.paginator}>
            <div className={style.paginatorItem}>{"<"}</div>
            <div
              className={`${style.paginatorItem} ${style.selected} ${style.one}`}
            >
              1
            </div>
            <div className={`${style.paginatorItem} ${style.two}`}>2</div>
            <div className={style.threeDots}>...</div>
            <div className={`${style.paginatorItem} ${style.forty}`}>40</div>
            <div className={style.paginatorItem}>&gt;</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainBlock;
