import classNames from "classnames";

const stepProgressBar = ({total, current, ...props}) => {
    const route = new Array(total).fill().map((_, i) => ({ now: current === i, active: current > i }));

    return (
        <ol className="survey-progress">
            {route.map((page, i) => (
                <li key={i} className={classNames({active: page.active, now: page.now })}>
                    <span />
                </li>
            ))}
            <style jsx>{`
				ol {
					position: absolute;
					top: 45px;
					right: 40px;
					display: flex;
					justify-content: flex-end;
				}
				li {
					display: flex;
					width: 26px;
					height: 26px;
					background-color: rgba(255, 255, 255, 0);
					border-radius: 50%;
					margin-right: 4px;
				}
				li > span {
					margin: auto;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background-color: #888;
				}
				li.active span {
					background-color: #9999ff;
				}
				li.now {
					background-color: #9999ff;
				}
				li.now span {
					opacity: 0.4;
					background-color: white;
				}
				li:last-child {
					margin-right: 0;
				}
			`}</style>
        </ol>
    );
};

export default stepProgressBar;