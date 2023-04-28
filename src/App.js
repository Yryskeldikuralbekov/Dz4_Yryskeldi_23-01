import React from "react";

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: " ",
      value2: " ",
      value3: " ",
      value4: " ",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({ value1: event.target.value });
  }
  handleChange2(event) {
    this.setState({ value2: event.target.value });
  }
  handleChange3(event) {
    this.setState({ value3: event.target.value });
  }
  handleChange4(event) {
    this.setState({ value4: event.target.value });
  }
  handleSubmit(event) {
    alert(
      "Отправлено! " +
        "\n" +
        " Фамилия:" +
        this.state.value1 +
        "\n" +
        "Имя:" +
        this.state.value2 +
        "\n" +
        "Номер:" +
        this.state.value3 +
        "\n" +
        "Email:" +
        this.state.value4
    );
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="formStyle">
          <label>
            Sername:
            <input
              className="input__form"
              typeof="text"
              placeholder="Введите фамилию"
              value={this.state.value1}
              onChange={this.handleChange1}
            />
          </label>
        </div>
        <div className="formStyle">
          <label>
            Name:
            <input
              placeholder="Введите имя"
              className="input__form"
              typeof="text"
              value={this.state.value2}
              onChange={this.handleChange2}
            />
          </label>
        </div>
        <div className="formStyle">
          <label>
            PhoneNumber:
            <input
              placeholder="Введите номер"
              className="input__form"
              typeof="phone"
              value={this.state.value3}
              onChange={this.handleChange3}
            />
          </label>
        </div>
        <div className="formStyle">
          <label for="email">
            Email:
            <input
              placeholder="Введите email"
              className="input__form"
              typeof="text"
              value={this.state.value4}
              onChange={this.handleChange4}
            />
          </label>
        </div>
        <input className="send" type="submit" value="Отправить" />
      </form>
    );
  }
}
