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
import { useMutation,useQuery } from '@apollo/client';
import { INSERT_CATEGORY,GET_DATA } from '../../graphql';

const AddCategories = () => {

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  // const [createItem] = useMutation(CREATE_ITEM, {
  //   refetchQueries: [{ query: GET_ITEMS }],
  // });

  const [category] = useMutation(INSERT_CATEGORY);

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

    //handleSubmit,

    register,

    control,

    formState: { errors },

  } = methods;

 
console.log(description,name,"test")
  /**

   * On editor body change

   */

  const onEditorStateChange = (editorStates: any) => {

    setDescription("fdgfdg");

  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await category({
        variables: { name, description },
      });

      // Clear the form fields after successful submission
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
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

        title={"Add Categories"}

      />

 

 

<Card>

  <Card.Body>

      <form onSubmit={handleSubmit}>

     
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

  control={control} value={name}
  onChange={(e) => setName(e.target.value)}

/>

</Col>
     <Col lg={6}>
     <Form.Group className="mb-3">

<Form.Label>Description</Form.Label>

<FormInput

  name="description"

  label="Description"

  className="Labeloutline"

  placeholder="Enter Description"

  containerClass={"mb-5"}

  key="productdes"

  errors={errors}

  control={control} value={description}
  onChange={(e) => setDescription(e.target.value)}

/>

{/* <Editor

  editorState={description}

  toolbarClassName="toolbarClassName"

  wrapperClassName="wrapperClassName border border-1"

  editorClassName="editorClassName px-2"

  onEditorStateChange={onEditorStateChange}

  editorStyle={{ minHeight: "150px" }}

/> */}
<button type="submit">Create Item</button>
</Form.Group>
     </Col>

   

      </form>

     

  </Card.Body>

  </Card>

  

    </>

 

      );

};

export default AddCategories;
