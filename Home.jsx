function Home({ pendingTasks }) {
return ( <main>


        <section id="home">

            <h2>Welcome to Saunava's VITMATE!</h2>

            <p>
                Manage your subjects, tasks and upcoming college events
                in one place.
            </p>

            <p>
                Stay updated with your academic and personal progress
                through VITMATE. Keep track of the goals you have
                achieved, the activities you have completed, and the
                milestones you have reached. VITMATE helps you understand
                where you stand and motivates you to keep moving forward.
                Never miss an important event on campus. VITMATE keeps you
                informed about upcoming technical events, club activities,
                workshops, competitions, and other student activities.
                Plan ahead, participate actively, and make the most of
                every opportunity at VIT. Keep your responsibilities
                organized and stay on top of your work with a dedicated
                task section.
            </p>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GvhH91Vh5KJCAWgclgzpOtkILSGYAVFmSeOVODAz5Btl12IDSqnA6umf&s=10"
                alt="VIT Chennai illustration"
                height="200"
            />

        </section>

        <section>

            <h2>Overview</h2>

            <div className="overview-cards">

                <div>
                    <h3>Subjects</h3>
                    <p>5</p>
                </div>

                <div>
                    <h3>Pending Tasks</h3>
                    <p>{pendingTasks}</p>
                </div>

                <div>
                    <h3>Upcoming Events</h3>
                    <p>3</p>
                </div>

            </div>

        </section>

    </main>
);


}

export default Home;

