import React from 'react';
import ArgonBox from "../../components/ArgonBox";
import Table from "../../examples/Tables/Table";

const ScoreTable = (props) => {
    return (
        <Table
            columns={[
                { name: "team", align: "left" },
                { name: "score", align: "left" },
                { name: "sports", align: "left" },
                { name: "status", align: "center" },
                { name: "Actions", align: "center" },
            ]}
            rows={props.scores}
        />
    );
};

export default ScoreTable;