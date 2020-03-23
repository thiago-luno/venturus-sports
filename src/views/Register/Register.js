import React from 'react';
import TitleSection from '../../components/TitleSection/TitleSection';
import Card from '../../components/Card/Card';
import FormRegister from '../../components/FormRegister/FormRegister';

const Register = (props) => {
    return (
        <div>            
            <div className="container-fluid">
                <TitleSection title="Registration" />

                <div style={{ display: 'flex' }}>
                    <Card
                        title="Need Help?"
                        text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        icon="far fa-life-ring">
                    </Card>

                    <Card
                        title="Why register?"
                        text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        icon="fas fa-heartbeat">
                    </Card>

                    <Card
                        title="What people are saying..."
                        text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        icon="far fa-smile">
                    </Card>
                </div>

                <FormRegister submitListener={props.submitListener} />
            </div>
        </div>

    )
}

export default Register
