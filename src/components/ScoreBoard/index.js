import React, { Component } from 'react';

class ScoreBoard extends Component {
  render() {
    return (
      <div className="scorekeeper row">
        <div className="columns eight">
          <table className="u-full-width">
            <thead>
              <tr>
                <td>Ale</td>
                <td>Indi</td>
                <td>Jakob</td>
                <td>Sam</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>10</td>
                <td>20</td>
                <td>-5</td>
              </tr>
              <tr>
                <td>20</td>
                <td>5</td>
                <td>10</td>
                <td>30</td>
              </tr>
              <tr>
                <td>0</td>
                <td>14</td>
                <td>18</td>
                <td>20</td>
              </tr>
              <tr>
                <td colSpan="4">
                  <button className="button">New Round</button>
                  <button className="button">Finish Game</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>30</td>
                <td>29</td>
                <td>48</td>
                <td>45</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
