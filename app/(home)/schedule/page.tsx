export default function CourseSchedule() {
  const scheduleData = [
    {
      week: 1,
      date: "TBD",
      location: "TBD",
      title: "Foundation & Supabase Setup",
      description:
        "Introduction to React Native, Expo, TypeScript, and NativeWind. Setup Supabase project and implement authentication. Basic navigation setup.",
      assignment:
        "Set up development environment, create initial app structure, implement basic authentication flows.",
    },
    {
      week: 2,
      date: "TBD",
      location: "TBD",
      title: "Database & User Profiles",
      description:
        "Design and implement Supabase schema, Row Level Security policies, and user profile management.",
      assignment:
        "Create database schema, implement user profiles, and basic RLS policies.",
    },
    {
      week: 3,
      date: "TBD",
      location: "TBD",
      title: "Task Management & Storage",
      description:
        "Implement task CRUD operations, setup storage bucket for images, and integrate camera/image picker.",
      assignment:
        "Build task creation/editing interface, implement image upload functionality.",
    },
    {
      week: 4,
      date: "TBD",
      location: "TBD",
      title: "Real-time Features",
      description:
        "Implement Supabase real-time subscriptions, social feed, and friend system.",
      assignment:
        "Create social feed interface, implement real-time updates and friend system.",
    },
    {
      week: 5,
      date: "TBD",
      location: "TBD",
      title: "Social Interactions",
      description:
        "Add likes/comments system, activity feed, task sharing, and push notifications.",
      assignment:
        "Implement social interaction features and notification system.",
    },
    {
      week: 6,
      date: "TBD",
      location: "TBD",
      title: "Polish & Performance",
      description:
        "Focus on UI/UX refinement, performance optimization, and error handling.",
      assignment:
        "Optimize app performance, improve error handling, and enhance UI/UX.",
    },
    {
      week: 7,
      date: "TBD",
      location: "TBD",
      title: "Deployment & Presentation",
      description:
        "Final testing, deployment preparation, and project presentations.",
      assignment:
        "Deploy application, prepare final presentation, and documentation.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex flex-col space-y-8">
        <h1 className="text-3xl font-bold text-fd-foreground">
          Mobile Development Workshop Schedule
        </h1>
        <p className="text-lg leading-relaxed text-fd-muted-foreground">
          Week-by-week breakdown of the workshop series. This schedule is
          tentative and subject to changes.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-fd-border">
                <th className="px-6 py-3 text-left text-sm font-semibold text-fd-foreground">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-fd-foreground">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-fd-foreground">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-fd-foreground">
                  Title & Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-fd-foreground">
                  Assignment
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((week) => (
                <tr key={week.week} className="border-b border-fd-border">
                  <td className="px-6 py-4 text-sm text-fd-foreground">
                    {week.week}
                  </td>
                  <td className="px-6 py-4 text-sm text-fd-foreground">
                    {week.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-fd-foreground">
                    {week.location}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-fd-foreground">
                      {week.title}
                    </div>
                    <div className="text-sm text-fd-muted-foreground mt-1">
                      {week.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-fd-muted-foreground">
                    {week.assignment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
