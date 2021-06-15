app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const Index = () => (
    <div>
        <p>Sample app using React and Next.js</p>
    </div>
);

export default Index;