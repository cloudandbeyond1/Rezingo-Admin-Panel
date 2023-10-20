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

const AddProgram = () => {

  const [editorState, setEditorState] = useState<any>();

  const categories = [

 

    {

      options: [

 

        { value: "SH1", label: "Physical" },

 

        { value: "SH2", label: "Social" },

 

        { value: "SH3", label: "Financial" },

 

        { value: "SH3", label: "Environmental" },

 

        { value: "SH3", label: "Intellectual" },

 

        { value: "SH3", label: "Occupational" },

 

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

        title={"Add Programs"}

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

                  label="Program Name"

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

                  label="Week"

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

         <FormInput

                name="name"

                label="Program ID"

                className="Labeloutline"

                 placeholder="Enter your ID"

                   containerClass={"mb-5"}

                   register={register}

                     key="productname"

                         errors={errors}

                          control={control}

                            />

               

                <FormInput

                  name="name"

                  label="Level"

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

                  Program Images

                </h5>

                <FileUploader />

                </Col>

        </Row>

</Col>

<Col lg={12}>
<Row>
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
        </Col>
        <Col lg={6}>
<Form.Group className="mb-3">

                  <Form.Label>Program Description</Form.Label>

                  <Editor

                    editorState={editorState}

                    toolbarClassName="toolbarClassName"

                    wrapperClassName="wrapperClassName border border-1"

                    editorClassName="editorClassName px-2"

                    onEditorStateChange={onEditorStateChange}

                    editorStyle={{ minHeight: "150px" }}

                  />

                </Form.Group>
        </Col>
</Row>
        </Col>
      </form>

     

  </Card.Body>

  </Card>

  

    </>

 

      );

};

export default AddProgram;
