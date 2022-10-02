import React from 'react';
import 'child_process';  // replace ^ if using ES modules


class Row extends React.Component {

    constructor(props) {
        super(props);
        console.log(this)
        this.state = {
            status: props.status,
            name: props.name,
            email: props.email,
            id: props.id
        };
    }

    click() {
        console.log("This is where the shell command used to send emails will be executed");
        const { exec } = require("child_process");
        // exec("ls -la", (error, stdout, stderr)); 


        // "echo "When would you like to teach?" | mail -s "Pick your course time" -S "from=donotreply@cs.brandeis.edu" pollack@brandeis.edu"
    }

    changeState = (id, event) => {
        if (this.state.status == "table-success") {
            this.setState({ status: "table-danger" })
            fetch('http://localhost:1337/professor/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ hasResponded: "false" })
            });
        } else {
            this.setState({ status: "table-success" })
            fetch('http://localhost:1337/professor/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ hasResponded: "true" })
            });
        }
    }


    render() {
        return (
            <tr class={this.state.status}>
                <th scope="row">{this.state.name}</th>
                <td>{this.state.email}</td>
                <td>
                    {this.state.status == "table-success" ? "Has Responded" :
                        this.state.status != "table-danger" ? "" : "Has Not Responded Yet"}
                </td>
                <td>
                    <button onClick={this.click}>Send Reminder to Respond</button>
                    {/* <button onClick={this.changeState.bind(this, this.state.id)}>Toggle Response Status</button> */}
                    <button onClick={this.changeState.bind(this, this.state.id)}>Toggle Response Status</button>
                </td>
            </tr>
        )
    }
}

export default Row;