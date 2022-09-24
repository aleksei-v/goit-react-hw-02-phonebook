import React, {Component} from "react";

export class Form extends Component {

    state = {
        name: ''
    }

    handleInputChange = evt => {
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value,
        });
        
    };
    onClickSubmit = (evt) => {
      evt.preventDefault();

      this.props.onSubmit(this.state.name);
      this.resetForm();
    }
  resetForm = () => {
    this.setState({
      name: "",
    });
  };

    render() {
  
        return (
            <>
                <h1>Phonebook</h1>
                <form onSubmit={this.onClickSubmit}>
                    <label>Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces.
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button
                        type="submit"
                    >
                        Add contact
                    </button>
                </form>
            </>
)
    }
}