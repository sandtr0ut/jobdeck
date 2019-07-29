import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreatProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import AddComProfile from "../profile-forms/AddComProfile";
import AddJobPost from "../profile-forms/AddJobPost";
import Profiles from "../profiles/Profiles";
// import ComProfiles from "../profiles-com/ComProfiles";
// import JobPosts from "../jobPosts/JobPosts";
import Profile from "../profile/Profile";
// import ComProfile from "../profile-com/ComProfile";
// import JobPost from "../jobPost/JobPost";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        {/* <Route exact path="/comprofiles" component={ComProfiles} /> */}
        {/* <Route exact path="/comprofile/:id" component={ComProfile} /> */}
        {/* <Route exact path="/jobposts" component={JobPosts} /> */}
        {/* <Route exact path="/jobpost/:id" component={JobPost} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/add-comprofile" component={AddComProfile} />
        <PrivateRoute exact path="/add-jobpost" component={AddJobPost} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
