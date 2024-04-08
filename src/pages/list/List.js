import React from 'react';

const List = ({data}) => {
    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.id}</h2>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default List;