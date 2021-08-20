import React, { Component } from "react";

import axios from "axios";
// import URL from "../Constant/URL";
import moment from "moment";

class StockAlerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_data: null,
      isLoading: true,
      user_email: null,
    };
  }

  async componentDidMount() {
    this._getManualNotification();
  }

  _getManualNotification = () => {
    let url = "https://sharestock.io/api/getAllNotification/?type=1";
    axios.get(url).then((response) => {
      this.setState({ post_data: response.data.data, isLoading: false });
    });
  };

  navigate_to_details = (data) => {
    if (data !== null && data !== undefined) {
      let list = data.title.split(" ");
      let symbol = list[0].trim();
      if (symbol === symbol.toUpperCase())
        this.props.navigation.push("StockDetails", {
          symbol: list[0],
        });
    }
  };

  _render_post_data = () => {
    if (this.state.post_data != null) {
      let list = this.state.post_data;
      return list.map((data, index) => {
        return (
          <div key={index}>
            <div
              style={styles.card}
              onPress={() => this.navigate_to_details(data)}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}
                  >
                    {data.title}
                  </span>
                  <span
                    style={{ color: "#7c818c", fontSize: 16, paddingLeft: 5 }}
                  >
                    · {moment(new Date(data.dateTime)).fromNow()}
                  </span>
                </div>
                <span
                  style={{
                    color: "#FFF",
                    paddingTop: 5,
                    fontSize: 16,
                    textAlign: "left",
                  }}
                >
                  {data.message}
                </span>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div
        style={{ overflowY: "scroll", height: 400 }}
        showsVerticalScrollIndicator={false}
      >
        {this._render_post_data()}
      </div>
    );
  }
}

export default StockAlerts;

const styles = {
  container: {
    //flex: 1,
    //backgroundColor: "#282c34",
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  searchbar: {
    marginTop: 50,
  },
  loadCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#147efb",
  },
  loadTitle: {
    color: "#fff",
    fontSize: 16,
    margin: 8,
    fontWeight: "700",
  },
  profileImage: {
    flex: 1,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    marginBottom: 0,
    marginRight: 5,
    borderColor: "#147efb",
    alignSelf: "flex-start",
    marginTop: 15,
  },
  card: {
    //backgroundColor: "#F5F8FA",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: "#4b5162",
    //shadowOpacity: 2.0,
    //backgroundColor: "#4b5162",
    //borderRadius: 10,
    //padding: 10,
    borderBottomColor: "#7c818c",
    borderBottomWidth: 0.5,
    //paddingLeft: 20,
    borderWidth: "1px",
    borderBottomStyle: "solid",
    // height: 500,
    marginVertical: 2,
    //marginHorizontal: 10,
    justifyContent: "center",
  },
};
