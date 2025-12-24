import { useDispatch, useSelector } from "react-redux";
import { selectSettings } from "../../redux/selector";
import { setIsOpenContactPopup } from "../../redux/selects/settings";
import { cn } from "../../utils/helper";

const contact = [
  {
    sendTo: "https://web.telegram.org/k/#@Litnightmares",
    title: "Telegram",
    icon: "📨",
    subtitle: "@inout_partners",
  },
  {
    sendTo: "https://web.telegram.org/k/#@Litnightmares",
    title: "Email",
    icon: "✉️",
    subtitle: "partners@inout.global",
  },
  {
    sendTo: "https://web.telegram.org/k/#@Litnightmares",
    title: "Teams",
    icon: "💬",
    subtitle: "Join to the chat",
  },
];

const Popup = () => {
  const { isOpenContactPopup } = useSelector(selectSettings);
  const dispatch = useDispatch();

  return (
    <div
      className={cn(
        "fixed w-full h-full top-0 left-0 z-40 justify-center items-center bg-black/90 hidden",
        {
          flex: isOpenContactPopup,
        },
      )}
    >
      <div className="w-full md:w-[500px] h-fit boarder rounded-md bg-[#0e0e0e] text-white">
        <div className="w-full p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Contact us</h2>
              <p className="mt-1 text-sm text-zinc-400">
                We'll be happy to answer any questions regarding our processes
                and products
              </p>
            </div>

            <button
              onClick={() => dispatch(setIsOpenContactPopup(false))}
              className="text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {contact.map((item) => (
              <a
                href={item.sendTo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  dispatch(setIsOpenContactPopup(false));
                }}
                className="flex cursor-pointer items-center justify-between rounded-xl bg-zinc-800 px-4 py-3 transition hover:bg-zinc-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-400">{item.subtitle}</p>
                  </div>
                </div>

                <span className="text-zinc-400">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
