export default function ContactFormSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-primary">
              General Enquiries
            </h2>

            <p className="mt-4 text-primary">
              Have a question or need more information?
            </p>

            <p className="mt-1 text-sm text-primary font-bold">
              Fill out the form below, and we’ll get back to you as soon as
              possible.
            </p>

            {/* Note Box */}
            <div className="mt-8 rounded-xl border border-cta p-6">
              <h4 className="font-medium text-primary">Please note</h4>

              <p className="mt-2 text-sm text-primary/80 leading-relaxed">
                Our solutions are tailored to meet the unique needs of your
                business. To ensure that we can deliver the best results, we
                typically work with clients who have a project budget of
                $3,000 or more. The final cost of the project depends on the
                scope and complexity of the solution, with most projects
                ranging from $3,000 to $25,000.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="rounded-lg bg-cta  px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-cta/80"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
