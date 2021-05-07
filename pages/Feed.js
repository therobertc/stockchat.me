import React, { Component } from "react";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://botapi-seven.vercel.app/tweet", {
      // matching all API routes
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.date_created}</li>
          ))}

          <div>
            <div
              style={{
                //display: "flex",
                //flexWrap: "wrap",
                marginTop: 20,
                backgroundColor: "#E1E8ED",
                borderRadius: 20,
                paddingHorizontal: 20,
                marginRight: 30,
                padding: 5,
                //margin: 5,
                width: 300,
                //height: 35,
                //boxShadow: "0px 2px 4px 1px lightgrey",
                //shadowColor: "lightgrey",
                //shadowOpacity: 5.0,
                marginRight: 25,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <div
                style={{
                  //display: "flex",
                  //flexWrap: "wrap",
                  marginTop: 20,
                  backgroundColor: "#657786",
                  borderRadius: 25,
                  padding: 20,
                  marginRight: 30,
                  //margin: 5,
                  width: 50,
                  height: 50,
                  paddingTop: 10,
                  margin: 20,

                  //height: 35,
                  //boxShadow: "0px 2px 4px 1px lightgrey",
                  //shadowColor: "lightgrey",
                  //shadowOpacity: 5.0,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              ></div>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#657786",
                  margin: 20
                }}
              >
                This is a tweet
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#657786",
                  margin: 20
                }}
              >
                -273,551%
              </p>
            </div>
          </div>
        </ul>
      );
    }
  }
}

export default Feed;
