import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import ArgonBox from "../ArgonBox";
import Card from "@mui/material/Card";
import * as emailjs from "@emailjs/browser";
import {useState} from "react";
import ArgonTypography from "../ArgonTypography";
import ArgonInput from "../ArgonInput";
import ArgonButton from "../ArgonButton";
import {useNavigate} from "react-router-dom";

export const ContactUs = () => {
    const [userMessage, setUserMessage] = useState({
        from_name: null,
        from_email: null,
        message: null
    })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    // const [disabled, setDisabled] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.send('service_54cam08', 'template_kl0tiaj', {
            from_name: userMessage.from_name,
            from_email: userMessage.from_email,
            message: userMessage.message,
        }, "5r6822MXz4nfPPBAk").then(r => {
            setIsLoading(false)
            navigate("/dashboard")
        }).catch(err => {
            setIsLoading(false)
            console.log(err)
        });
    };
    const handleFieldsChange = (e) => {
        let value = e.target.value
        setUserMessage({...userMessage, [e.target.name]: value});

    }
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar/>
                <h1>Please enter details to contact Us</h1>
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox p={3} mb={1} textAlign="center">
                            <ArgonTypography variant="h5" fontWeight="medium">
                                Please enter details to contact Us
                            </ArgonTypography>
                        </ArgonBox>
                        <ArgonBox pt={2} pb={3} px={3}>
                            <ArgonBox component="form" role="form">
                                <ArgonBox mb={2}>
                                    <ArgonInput value={userMessage.from_name}
                                                onChange={(e) => setUserMessage({
                                                    ...userMessage,
                                                    from_name: e.target.value
                                                })}
                                                placeholder="Full Name"/>
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput value={userMessage.from_email}
                                                onChange={(e) => setUserMessage({
                                                    ...userMessage,
                                                    from_email: e.target.value
                                                })} type="email"
                                                placeholder="example@example.com"/>
                                </ArgonBox>
                                <ArgonBox mb={2}>
                                    <ArgonInput multiline
                                                rows={4} value={userMessage.message}
                                                onChange={(e) => setUserMessage({
                                                    ...userMessage,
                                                    message: e.target.value
                                                })} type="text"
                                                placeholder="Enter your message"/>
                                </ArgonBox>
                                <ArgonBox mt={4} mb={1}>
                                    <ArgonButton onClick={(e) => sendEmail(e)} variant="gradient" color="dark"
                                                 fullWidth>
                                        Send Message
                                    </ArgonButton>
                                </ArgonBox>
                            </ArgonBox>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </DashboardLayout>
        </>
    )
}
