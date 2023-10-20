import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";

// styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// components
import PageTitle from "../../components/PageTitle";
import FileUploader from "../../components/FileUploader";
import { FormInput } from "../../components/";

const AddPractitioners = () => {

  const [editorState, setEditorState] = useState<any>();

  const categories = [

    {

      label: "Shopping",

      options: [

        { value: "SH1", label: "Shopping 1" },

        { value: "SH2", label: "Shopping 2" },

        { value: "SH3", label: "Shopping 3" },

      ],

    },

    {

      label: "CRM",

      options: [

        { value: "CRM1", label: "Crm 1" },

        { value: "CRM2", label: "Crm 2" },

        { value: "CRM3", label: "Crm 3" },

        { value: "CRM4", label: "Crm 4" },

      ],

    },

    {

      label: "eCommerce",

      options: [

        { value: "E1", label: "eCommerce 1" },

        { value: "E2", label: "eCommerce 2" },

        { value: "E3", label: "eCommerce 3" },

        { value: "E4", label: "eCommerce 4" },

      ],

    },

  ];

  /*

   * form validation schema

   */

  const schemaResolver = yupResolver(

    yup.object().shape({

      name: yup.string().required("Please enter Project Name"),

      reference: yup.string().required("Please enter Project Name"),

      summary: yup.string().required("Please enter Project Name"),

      price: yup.string().required("Please enter Project Name"),

      comment: yup.string().required("Please enter Project Name"),

      metatitle: yup.string().required("Please enter Project Name"),

      metakeywords: yup.string().required("Please enter Project Name"),

      metadescription: yup.string().required("Please enter Project Name"),

    })

  );

 

  /*

   * form methods

   */

  const methods = useForm({ resolver: schemaResolver });

  const {

    handleSubmit,

    register,

    control,

    formState: { errors },

  } = methods;

 

  /**

   * On editor body change

   */

  const onEditorStateChange = (editorStates: any) => {

    setEditorState(editorStates);

  };

 

  return (

    <>

      <PageTitle

        breadCrumbItems={[

          { label: "Ecommerce", path: "/apps/ecommerce/details" },

          {

            label: "Add / Edit Product",

            path: "/apps/ecommerce/details",

            active: true,

          },

        ]}

        title={"Add Practitioners"}

      />

 

 

<Card>

  <Card.Body>

      <form onSubmit={handleSubmit(() => {})}>

     

     

   

        <Col lg={12}>

        <Row>

          <Col lg={6}>

               <Row>

                <Col lg={6}>

                <FormInput

                  name="name"

                  label="Name"

                  className="Labeloutline"

                  placeholder="Enter name"

                  containerClass={"mb-5"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

 

                <FormInput

                  name="name"

                  label="ID"

                  className="Labeloutline"

                  placeholder="Enter your ID"

                  containerClass={"mb-5"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

               

         </Col>

         <Col lg={6}>

                <Form.Group className="mb-5">

                  <Form.Label>Select Categories</Form.Label>

                  <Select

                    className="react-select react-select-container"

                    classNamePrefix="react-select"

                    options={categories}

                    placeholder="Enter categories"

                    id="product-category"

                  />

                </Form.Group>

               

                <FormInput

                  name="name"

                  label="About practitioner"

                  className="Labeloutline"

                  placeholder="Enter your thoughts"

                  containerClass={"mb-5"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

                </Col>

                </Row>

                </Col>

             

                <Col lg={6}>

                <h5 className="text-uppercase mt-0 mb-4 bg-light p-2">

                  Profile Images

                </h5>

                <FileUploader />

                </Col>

        </Row>

</Col>

<Col lg={12}>

        <Row>

        <Col lg={4}>

        <FormInput

                  name="e-mail"

                  label="E-mail"

                  className="Labeloutline"

                  placeholder="Enter your Mail-ID"

                  containerClass={"mb-3"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

            </Col>

 

            <Col lg={4}>

           

   

              <FormInput

                  name="name"

                  label="Mobile Number"

                  className="Labeloutline"

                  placeholder="Enter your number"

                  containerClass={"mb-3"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

         

            </Col>

            <Col lg={4}>

         

                <FormInput

                  name="name"

                  label="Location"

                  className="Labeloutline"

                  placeholder="Enter your localitiy"

                  containerClass={"mb-3"}

                  register={register}

                  key="productname"

                  errors={errors}

                  control={control}

                />

 

            </Col>

 

        </Row>

        </Col>

      </form>

     

  </Card.Body>

  </Card>

    </>

 

      );

};

export default AddPractitioners;
