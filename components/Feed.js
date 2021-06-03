import React, { Component } from "react";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      final_data: [],
      isSubscribed: true,
    };
  }

  componentDidMount() {
    this.getTrandingData();
  }

  componentWillUnmount() {
    this.getTrandingData();
  }

  async getTrandingData() {
    return fetch(
      "https://sharestock.io/api/stockchat/wsb-trends/?token=e10272b94c36ea1ccb217b30028b2e7e4756c9c7",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            data: responseJson.data,
            isLoading: false,
          },
          function () {}
        );
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  TrendingComponent = () => {
    // CheckGroupExistsOrNot("SQ").then((snapshot))
    if (this.state.data.length) {
      return this.state.data.map((service, index) => (
        <div
          key={index}
          onPress={() =>
            this.props.navigation.push("StockDetails", {
              symbol: service.symbol,
            })
          }
        >
          <div
            style={{
              paddingTop: 10,
              marginHorizontal: 10,
              borderBottomColor: "lightgrey",
              borderBottomWidth: 0.5,
              paddingLeft: 20,
              borderWidth: "0.5px",
              borderBottomStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                paddingBottom: 5,
                display: "flex",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  color: "#000",
                  //textAlign: "center",
                  //   color:
                  //     parseFloat(service.changePercent) < 0
                  //       ? "#ff3636"
                  //       : "#33CC00"
                }}
              >
                {service.symbol}{" "}
              </p>

              <p
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  paddingLeft: 5,
                  paddingRight: 5,
                  //textAlign: "center",
                  color:
                    parseFloat(service.changePercent) < 0
                      ? "#ff3636"
                      : "#33CC00",
                }}
              >
                {(service.changePercent * 100).toFixed(2)}%
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: 18,
                  color: "#000",

                  //textAlign: "center",
                  //   color:
                  //     parseFloat(service.changePercent) < 0
                  //       ? "#ff3636"
                  //       : "#33CC00"
                }}
              >
                to ${service.latestPrice}
              </p>
            </div>

            <p style={styles.stocktext}>
              {service.companyName} was mentioned {service.count} times on
              WallStreetBets in the last 24 hours
            </p>
          </div>
        </div>
      ));
    }
  };

  render() {
    return (
      <div
        //horizontal={true}
        style={{ overflowY: "scroll", height: 600 }}
        showsHorizontalScrollIndicator={false}
      >
        {this.TrendingComponent()}
      </div>
    );
  }
}

export default Feed;

const styles = {
  container: {
    //paddingVertical: 10,
    //backgroundColor: "#282c34",
    //marginLeft: 20
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
  },

  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    //marginBottom: 36
  },

  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#282c34",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 18,
    color: "#000",
    marginLeft: 10,
  },
  card: {
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowRadius: 2,
    //shadowColor: "#657786",
    marginLeft: 10,
    shadowOpacity: 0.2,
    marginVertical: 5,
    elevation: 1,
    //backgroundColor: "#e8eef1",
    //backgroundColor: "#282c34"
    backgroundColor: "#282c34",
    borderRadius: 20,
    //paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    //paddingHorizontal: 40,
    alignItems: "center",
    //marginTop: 15,
    //marginBottom: 20,
    justifyContent: "space-between",
    height: 80,
    start: 10,
  },
  datacard: {
    //backgroundColor: "#147efb",
    //height: 40,
    //width: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  stocktext: {
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "center",
    color: "#000",
    textAlign: "left",
  },

  stocktextred: {
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "center",
    //color: 'red'
  },

  offerCard: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "lightgrey",
    shadowOpacity: 1.0,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#e8eef1",
    margin: 10,
    borderRadius: 20,
    width: 340,
  },
  screenContainer: {
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: "lightgrey",
    shadowOpacity: 2.0,
    margin: 10,
    //backgroundColor: "#e8eef1",
    backgroundColor: "#282c34",
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  topContainer: {
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: "lightgrey",
    shadowOpacity: 2.0,
    marginHorizontal: 10,
    marginBottom: 10,
    //backgroundColor: "#e8eef1",
    backgroundColor: "#282c34",
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    //textAlign: "center"
    marginHorizontal: 20,
    textAlign: "left",
  },
  subheading: {
    fontSize: 14,
    fontWeight: "400",
    //textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20,
  },
  ticker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
  tickertext: {
    //paddingLeft: 20,
    //paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  viewmore: {
    color: "#147efb",
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 10,
  },
  tickerbox: {
    padding: 10,
  },
  seperator: {
    marginVertical: 10,
    //borderColor: "#F5F8FA",
    borderWidth: 0.5,
  },
  textview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    //height: 100
  },
};
