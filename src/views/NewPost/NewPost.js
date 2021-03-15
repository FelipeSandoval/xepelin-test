import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useFormik } from "formik";
import * as yup from "yup";

// Endpoints
import { newPost } from "../../services/post";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const validationSchema = yup.object({
  title: yup.string("Enter a Title").required("Title is required"),
  userId: yup.string("Enter your userId").required("UserId is required"),
  body: yup.string("Enter a Body").required("Body is required"),
});

const NewPost = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "This is an example",
      userId: "5",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipiscing elit commodo tempor turpis, cursus velit mi himenaeos. Sociosqu ligula habitant bibendum urna litora arcu ultrices, tempor per auctor integer mattis molestie morbi tristique, risus aliquet erat suscipit et nec. Ullamcorper cras tristique mattis nam nostra tincidunt penatibus vestibulum, erat pretium enim egestas lobortis auctor posuere sodales faucibus, suscipit montes id mi ornare condimentum lacinia.Netus senectus eu sed iaculis venenatis himenaeos primis, pretium suscipit ornare turpis dapibus justo. Rhoncus dictumst conubia scelerisque ante metus aptent, venenatis vulputate felis dapibus sociosqu tortor vitae, tempus commodo dignissim in placerat. Tempor mauris egestas conubia eleifend dignissim purus faucibus enim, auctor parturient leo laoreet bibendum libero feugiat condimentum luctus, justo nascetur vel convallis arcu duis orci.",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      newPost({ ...values });
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* // title, body and userId */}
      <div className={classes.root}>
        <TextField
          color="primary"
          name="title"
          placeholder="Post Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          color="primary"
          name="userId"
          type="password"
          placeholder="User Id"
          value={formik.values.userId}
          onChange={formik.handleChange}
          error={formik.touched.userId && Boolean(formik.errors.userId)}
          helperText={formik.touched.userId && formik.errors.userId}
        />
        <TextField
          color="primary"
          name="body"
          placeholder="Post Body"
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
          multiline
          rows={6}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default NewPost;
